import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToBack = () => {
    navigate(-1);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToLoginMember = () => {
    navigate("/members/login");
  };

  const navigateToDetailConstellation = () => {
    navigate(`/constellations/detail/${1}`);
  };

  const navigateToRegisterConstellation = () => {
    navigate(`/constellations/register/${1}`);
  };

  const navigateToListConstellation = () => {
    navigate(`/constellations/${1}`);
  };

  const navigateToDrawingConstellation = () => {
    navigate(`/constellations/drawing`);
  };

  const navigateToRegisterMember = () => {
    navigate("/members/register");
  };

  const navigateToDetailPlanet = () => {
    navigate(`/planets/${1}`);
  };

  const navigateToStar = () => {
    navigate("/");
    // 미완
  };

  const refreshPage = () => {
    navigate(".", { replace: true });
  };

  const navigateToListPlanet = () => {
    navigate("/planets");
  };

  const navigateToProfile = () => {
    navigate("/profiles");
  };

  const navigateToFollowings = () => {
    navigate("/profiles/followings");
  };

  const navigateToFollowers = () => {
    navigate("/profiles/followers");
  };

  return {
    navigateToLoginMember,
    navigateToDetailConstellation,
    navigateToBack,
    navigateToHome,
    navigateToRegisterConstellation,
    navigateToListConstellation,
    navigateToDrawingConstellation,
    navigateToStar,
    navigateToListPlanet,
    navigateToDetailPlanet,
    navigateToRegisterMember,
    navigateToProfile,
    refreshPage,
    navigateToFollowings,
    navigateToFollowers,
  };
};
