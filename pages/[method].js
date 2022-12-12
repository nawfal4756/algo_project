import { useDispatch, useSelector } from "react-redux";
import ArrayDisplay from "../Components/ArrayDisplay";
import { methods } from "../Other/SortInfo";
import { getData } from "../Context/DataSlice";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Button, CircularProgress, Divider } from "@mui/material";
import { openSnackbar } from "../Context/SnackbarSlice";
import Link from "next/link";

export default function MethodPage({ data }) {
  const arrayData = useSelector(getData);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { method } = router.query;
  const dispatch = useDispatch();
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    setLoading(true);
    async function callRequest(array) {
      try {
        const response = await axios.post(`/api/${method}`, array);
        setResponse(response.data);
      } catch (err) {
        if (err.response.status === 500) {
          dispatch(
            openSnackbar({ message: "Server Error Occured", severity: "error" })
          );
        } else {
          dispatch(
            openSnackbar({
              message: err.response.data.message,
              severity: "error",
            })
          );
        }
      }
    }

    if (!dataFetchedRef.current) {
      callRequest(arrayData);
      dataFetchedRef.current = true;
    }

    setLoading(false);
  }, []);
  console.log(response);
  return (
    <div>
      <h1>{data.name}</h1>
      <h3>{data.description}</h3>
      {loading ? (
        <CircularProgress />
      ) : (
        response.map((item, index) => {
          return (
            <ArrayDisplay
              data={item}
              parentIndex={index}
              key={index}
              method={method}
            />
          );
        })
      )}
      <Link href="/">
        <Button sx={{ mt: 7 }} variant="contained">
          Go Back
        </Button>
      </Link>
    </div>
  );
}

export async function getStaticProps(context) {
  const { method } = context.params;
  const data = methods.find((item) => {
    return item.id === `${method}`;
  });

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { method: "insertion" } },
      { params: { method: "bubble" } },
      { params: { method: "merge" } },
      { params: { method: "heap" } },
      { params: { method: "quick" } },
      { params: { method: "radix" } },
      { params: { method: "counting" } },
      { params: { method: "modifiedQuick" } },
    ],
    fallback: false,
  };
}
