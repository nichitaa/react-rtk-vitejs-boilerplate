import React, { FC, Suspense } from "react";

export const Common: FC<{ component: React.ReactElement }> = ({ component }): React.ReactElement => (
  <Suspense fallback={<>...</>}>
    {component}
  </Suspense>
);


