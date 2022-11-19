import { useSelector } from "react-redux";
import ArrayDisplay from "../Components/ArrayDisplay";
import { getData } from "../Context/Slice";
import { methods } from "../Other/SortInfo";

export default function MethodPage({ data }) {
  const arrayData = useSelector(getData);
  // console.log(arrayData);
  return (
    <div>
      <h1>{data.name}</h1>
      <h3>{data.description}</h3>
      <ArrayDisplay data={arrayData} />
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
