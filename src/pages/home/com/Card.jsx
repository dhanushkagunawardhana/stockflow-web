import React from "react";

import { Card as CommonCard } from "../../../components/Card";
import Button from "../../../components/Button";

import { Button as ShadCNButton } from "../../../components/ui/button";

function Card() {
  return (
    <div>
      <CommonCard content={"Card 1"} />
      <CommonCard content={"Card 2"} />

      <Button />
      <ShadCNButton>OK</ShadCNButton>
      <ShadCNButton variant="outline">Cancel</ShadCNButton>
    </div>
  );
}

export default Card;
