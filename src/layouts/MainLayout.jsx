function MainLayout(props) {
  return (
    <div className="grid w-screen h-screen bg-cyan-900 text-green text-3xl font-bold">
      {props.children}
    </div>
  );
}

export default MainLayout;
