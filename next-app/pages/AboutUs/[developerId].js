import { useRouter } from "next/router";
function MyName() {
  const router = useRouter();
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  let id = Number(router.query.developerId);
  let developer = "";
  let found = false;
  for (let i = 0; i < details.length; i++) {
    if (Number(details[i].id) === id) {
      found = true;
      developer = details[i].name + " " + details[i].role;
      break;
    }
  }
  if (!found) {
    developer = "Developer doesn't exist";
  }
  return <h1>{developer}</h1>;
}
export default MyName;
