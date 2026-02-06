const HEAD = (
  <div className="head" />
);

const BODY = (
  <div className="body" />
);

const RIGHT_ARM = (
  <div className="right-arm" />
);

const LEFT_ARM = (
  <div className="left-arm" />
);

const RIGHT_LEG = (
    <div className="right-leg" />
  );
  
  const LEFT_LEG = (
    <div className="left-leg" />
  );

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

export function Drawing() {

  return (
    <div className="drawing">
      {BODY_PARTS}
      <div className="rope" />
      <div className="hanger" />
      <div className="pole" />
      <div className="floor" />
    </div>
  )
}
