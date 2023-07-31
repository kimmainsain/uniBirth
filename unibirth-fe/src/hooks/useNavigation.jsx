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
  const navigateToDetailConstellation = (constellationId) => {
    navigate(`/constellations/detail/${constellationId}`);
  };

  const navigateToRegisterConstellation = (memberId) => {
    navigate(`/constellations/register/${memberId}`);
  };

  const navigateToDrawingConstellation = () => {
    navigate(`/constellations/drawing`);
  };

  // Planet
  const navigateToDetailPlanet = (planetId) => {
    navigate(`/planets/${planetId}`);
  };

  const navigateToMainPlanet = () => {
    navigate("/planets");
  };

  // Profile
  const navigateToMemberProfile = (memberId) => {
    navigate(`/profiles/${memberId}`);
  };

  const navigateToModifyProfile = (memberId) => {
    navigate(`/members/modify/${memberId}`);
  };

  const navigateToFollowings = (memberId) => {
    navigate(`/profiles/followings/${memberId}`);
  };

  const navigateToFollowers = (memberId) => {
    navigate(`/profiles/followers/${memberId}`);
  };

  const navigateToDirectMessage = (memberId) => {
    navigate(`/profiles/directmessage/${memberId}`);
  };

  const navigateToMessageBox = (memberId) => {
    navigate(`/profiles/messagebox/${memberId}`);
  };

  // Star
  const navigateToRegisterStar = (memberId) => {
    navigate(`/stars/register/${memberId}`);
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
