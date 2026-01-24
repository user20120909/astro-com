const Callback = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get('code');
  console.log('Code:', code);
  return <div>{code}</div>;
};
