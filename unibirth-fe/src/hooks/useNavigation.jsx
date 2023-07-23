import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToBack = () => {
    navigate(-1);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToLogin = () => {
    navigate("/members/login");
  };

  const navigateToDetailConstellation = () => {
    navigate(`/constellations/detail/${1}`);
  };

  const navigateToCreateConstellation = () => {
    navigate(`/constellations/register/${1}`);
  };

  const navigateToListConstellation = () => {
    navigate(`/constellations/${1}`);
  };

  const navigateToDrawingConstellation = () => {
    navigate(`/constellations/drawing/${1}`);
  };

  const navigateToStar = () => {
    navigate("/");
    // 미완
  };

  const refreshPage = () => {
    navigate(".", { replace: true });
  };

  return {
    navigateToLogin,
    navigateToDetailConstellation,
    navigateToBack,
    navigateToHome,
    navigateToCreateConstellation,
    navigateToListConstellation,
    navigateToDrawingConstellation,
    navigateToStar,
    refreshPage,
  };
};
