import { useEffect } from "react";
import { fetchingUser } from "./redux/user/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const userData = useSelector((initialUser) => initialUser.user);
  console.log(userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingUser());
  }, []);

  if (userData.isLoading) return <p>data is loading...</p>;
  if (userData.error) return <p style={{ color: "red" }}>{userData.error}</p>;
  if (!userData.data) return;

  return (
    <>
      <h2>this is user data:</h2>
      {userData.data.map((item) => {
        return (
          <div style={{ textAlign: "left" }} key={item.id}>
            {item.name}
          </div>
        );
      })}
    </>
  );
};

export default User;
