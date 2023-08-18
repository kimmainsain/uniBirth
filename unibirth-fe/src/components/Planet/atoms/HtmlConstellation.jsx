import React, { useState } from "react";
import { useNavigation } from "../../../hooks/useNavigation";
// import useConstellationApi from "../../../api/useConstellationApi";
import CustomAlert from "../../../common/atoms/CustomAlert";

const HtmlConstellation = ({ constellationId, isVisible, setIsVisible }) => {
  if (constellationId) {
    // naviigate  to detailconstellation
    const { navigateToDetailConstellation, navigateToBack } = useNavigation();
    const handleConstellationClick = (constellationId) => {
      navigateToDetailConstellation(constellationId);
    };
    // const [constellationContent, setConstellationConstent] = useState([]);
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    console.log(setAlertMessage);
    // useEffect(() => {
    //   getConstellationContent(constellationId);
    // }, [constellationContent]);
    // const getConstellationContent = async (constellationId) => {
    //   try {
    //     const response = await useConstellationApi.constellationsGetDetail(
    //       constellationId,
    //     );
    //     if (response.status === 200) {
    //       setConstellationConstent(response.resultData);
    //     } else if (response.status === 404) {
    //       setIsAlertVisible(true);
    //       setAlertMessage("별자리 정보를 불러오는데 실패했습니다.");
    //     } else if (response.status === 403) {
    //       setIsAlertVisible(true);
    //       setAlertMessage("로그인이 필요한 서비스입니다.");
    //     }
    //   } catch (error) {
    //     setIsAlertVisible(true);
    //     setAlertMessage("오류가 발생했습니다.");
    //   }
    // };

    // const handlePinClick = async (constellationContent) => {
    //   if (constellationContent.pined) {
    //     try {
    //       const response = await useConstellationApi.constellationsDeletePin(
    //         constellationContent.constellationId,
    //       );
    //       if (response.status === 200) {
    //         setConstellationConstent({ ...constellationContent, pined: false });
    //       } else if (response.status === 404) {
    //         setIsAlertVisible(true);
    //         setAlertMessage("핀을 삭제하는데 실패했습니다.");
    //       } else if (response.status === 403) {
    //         setIsAlertVisible(true);
    //         setAlertMessage("로그인이 필요한 서비스입니다.");
    //       }
    //     } catch (error) {
    //       setIsAlertVisible(true);
    //       setAlertMessage("오류가 발생했습니다.");
    //     }
    //   } else {
    //     try {
    //       const response = await useConstellationApi.constellationsGetPin(
    //         constellationContent.constellationId,
    //       );
    //       if (response.status === 200) {
    //         setConstellationConstent({ ...constellationContent, pined: true });
    //       } else {
    //         setIsAlertVisible(true);
    //         setAlertMessage(response.message);
    //       }
    //     } catch (error) {
    //       setIsAlertVisible(true);
    //       setAlertMessage("오류가 발생했습니다.");
    //     }
    //   }
    // };

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    return (
      <div>
        <CustomAlert
          message={alertMessage}
          isVisible={isAlertVisible}
          onClose={() => {
            setIsAlertVisible(false);
            if (
              alertMessage === "별자리 정보를 불러오는데 실패했습니다." ||
              alertMessage === "로그인이 필요한 서비스입니다." ||
              alertMessage === "오류가 발생했습니다."
            ) {
              navigateToBack();
            }
          }}
        />
        <button
          className="absolute right-4 top-4 z-10 rounded-lg border-2 bg-transparent p-2  text-white"
          onClick={toggleVisibility}
        >
          {isVisible ? "미리보기 가리기" : "미리보기"}
        </button>
        {isVisible && (
          <div className="absolute bottom-36 left-1/2 z-10 w-72 -translate-x-1/2 rounded-lg bg-slate-600 bg-opacity-80">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <div className="absolute right-2 top-2"></div>
              </div>
              <div className="flex justify-center">
                <button
                  className="my-4 w-40 rounded-full border-2 bg-transparent p-2 text-white"
                  onClick={() => handleConstellationClick(constellationId)}
                >
                  별자리 이동하기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
};
export default HtmlConstellation;
