import React from "react";

import Card from "../components/Card";
import Button from "../components/Button";

import { Button as ShadCNButton } from "../components/ui/button";

function Home() {
  return (
    <div>
      Home

      <Card content={"Card 1"} />
      <Card content={"Card 2"} />

      <Button />
      <ShadCNButton>OK</ShadCNButton>
      <ShadCNButton variant="outline">Cancel</ShadCNButton>
    </div>
  );
}

export default Home;
