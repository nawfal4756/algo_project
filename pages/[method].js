import { useDispatch, useSelector } from "react-redux";
import ArrayDisplay from "../Components/ArrayDisplay";
import { methods } from "../Other/SortInfo";
import { getData } from "../Context/DataSlice";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Button,
  CircularProgress,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { openSnackbar } from "../Context/SnackbarSlice";
import Link from "next/link";

export default function MethodPage({ data }) {
  const array = useSelector(getData);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bound1, setBound1] = useState("");
  const [bound2, setBound2] = useState("");
  const [submit, setSubmit] = useState(false);
  const router = useRouter();
  const { method } = router.query;
  const dispatch = useDispatch();
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    setLoading(true);
    async function callRequest() {
      try {
        const response = await axios.post(`/api/${method}`, { array });
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
      if (method != "boundedCount") {
        callRequest();
        dataFetchedRef.current = true;
      }
    }

    setLoading(false);
  }, []);

  const HandleSubmit = async () => {
    setLoading(true);
    setSubmit(true);
    try {
      const response = await axios.post(`/api/${method}`, {
        array,
        bound1,
        bound2,
      });
      setResponse(response.data);
    } catch (err) {
      if (err.response?.status === 500) {
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
    setLoading(false);
  };
  console.log("Array", array);
  console.log("Response", response);
  return (
    <div>
      <h1>{data.name}</h1>
      <h3>{data.description}</h3>
      {method === "boundedCount" && !submit ? (
        <div>
          <TextField
            value={bound1}
            onChange={(e) => setBound1(e.target.value)}
            type="number"
            label="Bound 1"
          />
          <TextField
            value={bound2}
            onChange={(e) => setBound2(e.target.value)}
            type="number"
            label="Bound 2"
            sx={{ ml: 1 }}
          />
          <Button variant="contained" sx={{ ml: 1 }} onClick={HandleSubmit}>
            Process
          </Button>
        </div>
      ) : null}
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
      <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4 }}>
        Time Complexity: {data.timeComplexity}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
        Space Complexity: {data.spaceComplexity}
      </Typography>
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
      { params: { method: "bucket" } },
      { params: { method: "counting" } },
      { params: { method: "modifiedQuick" } },
      { params: { method: "boundedCount" } },
    ],
    fallback: false,
  };
}
