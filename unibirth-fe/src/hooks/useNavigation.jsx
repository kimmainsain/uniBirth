import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToBack = () => {
    navigate(-1);
  };

  const refreshPage = () => {
    navigate(".", { replace: true });
  };

  // Home
  const navigateToHome = () => {
    navigate("/");
  };

  // Member
  const navigateToLoginMember = () => {
    navigate("/members/login");
  };

  const navigateToRegisterMember = () => {
    navigate("/members/register");
  };

  // Constellation
  const navigateToDetailConstellation = () => {
    navigate(`/constellations/detail/${1}`);
  };

  const navigateToRegisterConstellation = () => {
    navigate(`/constellations/register/${1}`);
  };

  const navigateToDrawingConstellation = () => {
    navigate(`/constellations/drawing`);
  };

  // Planet
  const navigateToDetailPlanet = () => {
    navigate(`/planets/${1}`);
  };

  const navigateToMainPlanet = () => {
    navigate("/planets");
  };

  // Profile
  const navigateToMemberProfile = () => {
    navigate(`/profiles/${1}`);
  };

  const navigateToModifyProfile = () => {
    navigate(`/profiles/modify/${1}`);
  };

  const navigateToFollowings = () => {
    navigate(`/profiles/followings/${1}`);
  };

  const navigateToFollowers = () => {
    navigate(`/profiles/followers/${1}`);
  };

  const navigateToDirectMessage = () => {
    navigate(`/profiles/directmessage/${1}`);
  };

  const navigateToMessageBox = () => {
    navigate(`/profiles/messagebox/${1}`);
  };

  // Star
  const navigateToRegisterStar = () => {
    navigate(`/stars/register/${1}`);
  };

  // Search
  const navigateToSearchQuration = () => {
    navigate("/search");
  };

  const navigateToSearchCommon = (query, categoryname) => {
    navigate(`/search?content=${query}&category=${categoryname}`);
  };

  return {
    navigateToBack,
    refreshPage,
    navigateToHome,
    navigateToLoginMember,
    navigateToRegisterMember,
    navigateToDetailConstellation,
    navigateToRegisterConstellation,
    navigateToDrawingConstellation,
    navigateToDetailPlanet,
    navigateToMainPlanet,
    navigateToMemberProfile,
    navigateToModifyProfile,
    navigateToFollowings,
    navigateToFollowers,
    navigateToDirectMessage,
    navigateToMessageBox,
    navigateToRegisterStar,
    navigateToSearchQuration,
    navigateToSearchCommon,
  };
};
