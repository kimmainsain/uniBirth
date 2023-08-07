import React, { useEffect, useState } from "react";
import useConstellationApi from "../../../api/useConstellationApi";

const ListTemplateModalConstellation = ({ isModalOpen, setIsModalOpen }) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [templateList, setTemplateList] = useState({
    templateList: [],
  });

  const handlePutTemplateConstellation = () => {
    alert("템플릿을 띄웁니다.");
  };

  const getTemplateModalConstellation = async () => {
    try {
      const response =
        await useConstellationApi.constellationsGetTemplateList();
      if (response.status === 200) {
        setTemplateList(response.resultData);
        console.log("별자리 템플릿을 불러왔습니다.", response.resultData);
      } else {
        alert("별자리 템플릿을 불러오는데 실패하였습니다.");
      }
    } catch (e) {
      console.log(e);
      alert("별자리 템플릿을 불러오는데 실패하였습니다.");
    }
    console.log(templateList);
  };

  useEffect(() => {
    getTemplateModalConstellation();
  }, []);

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        <div className="z-10 rounded bg-white p-4 shadow-md">
          <div className="mt-4 flex justify-center">
            {templateList?.templateList.map((template) => (
              <div key={template.templateId}>
                <img
                  src={template.imageUrl}
                  onClick={handlePutTemplateConstellation}
                />
              </div>
            ))}
            <button
              className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              onClick={handleCloseModal}
            >
              창 닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTemplateModalConstellation;
