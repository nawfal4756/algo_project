import { useSelector } from "react-redux";
import { methods } from "../Other/SortInfo";
import { getData } from "../Context/DataSlice";

export default function MethodPage({ data }) {
  const arrayData = useSelector(getData);
  console.log(arrayData);
  return (
    <div>
      <h1>{data.name}</h1>
      <h3>{data.description}</h3>
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
    paths: [{ params: { method: "insertion" } }],
    fallback: false,
  };
}
