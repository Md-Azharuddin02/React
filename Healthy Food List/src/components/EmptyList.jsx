function EmptyList({getFoodList}) {
  return <>{getFoodList.length === 0 && <h1>I am hungry ! Get me the food</h1>}</>;
}
export default EmptyList;
