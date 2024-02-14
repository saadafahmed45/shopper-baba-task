import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center mt-10">
      <h2 className="text-red-600 text-3xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
{
  /* <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /> */
}
