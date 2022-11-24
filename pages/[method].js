import { useDispatch, useSelector } from "react-redux";
import ArrayDisplay from "../Components/ArrayDisplay";
import { methods } from "../Other/SortInfo";
import { getData } from "../Context/DataSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { CircularProgress, Divider } from "@mui/material";
import { openSnackbar } from "../Context/SnackbarSlice";

export default function MethodPage({ data }) {
  const arrayData = Array.from(useSelector(getData));
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { method } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    async function callRequest(array) {
      if (arrayData.length === 0) {
        router.push("/");
        return;
      }
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

    callRequest(arrayData);
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
    ],
    fallback: false,
  };
}
