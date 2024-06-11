import { Button, Icon, greet } from "@/utility/util";

export default function Home() {
  return <main>
    {greet("John Doe")}
    {<Icon name="arrow-down"/>}
    <Button>Click me</Button>
  </main>;
}
