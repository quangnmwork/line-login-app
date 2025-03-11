import { getServerSession } from "next-auth";
import { options } from "../options";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);

  console.log({ session });

  return <div>{children}</div>;
}
