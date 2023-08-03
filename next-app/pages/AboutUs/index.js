import Link from "next/link";
function AboutUs() {
  return (
    <>
      <h1>this is AboutUs page</h1>
      <ul>
        <li>
          <Link href="/AboutUs/1">Yash</Link>
        </li>
        <li>
          <Link href="/AboutUs/2">Vaibhav</Link>
        </li>
        <li>
          <Link href="/AboutUs/3">Suresh</Link>
        </li>
      </ul>
    </>
  );
}
export default AboutUs;
