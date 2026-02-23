const imgAlexChen = "https://www.figma.com/api/mcp/asset/f3dc1b31-c16a-4c5c-ac23-9d56c3930d24";

export default function FileManagementNewFileUploadSelect() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start relative size-full">
      <div className="content-stretch flex flex-col isolate items-start min-h-[1125px] relative shrink-0 w-full">
        {/* Header */}
        <div className="bg-white border-[#e2e8f0] border-b border-solid content-stretch flex flex-col h-[80px] items-center justify-between pb-px relative shrink-0 w-full z-[2]">
          <div className="flex-[1_0_0] max-w-[1280px] min-h-px min-w-px relative w-full">
            <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
              <div className="content-stretch flex gap-[40px] h-full items-center relative shrink-0">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="bg-[#137fec] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]">
                    <span className="material-symbols-outlined text-white text-[18px]">grid_view</span>
                  </div>
                  <span className="font-bold text-[#0f172a] text-[18px] tracking-[-0.45px]">MH OCR AI</span>
                </div>
                <nav className="content-stretch flex gap-[32px] h-full items-center relative shrink-0">
                  <a href="/file-management" className="border-[#137fec] border-b-2 border-solid content-stretch flex h-full items-center pb-[21.75px] pt-[18.25px] px-[4px] relative shrink-0 font-bold text-[#137fec] text-[15px]">파일 관리</a>
                  <a href="/analytics" className="border-[rgba(0,0,0,0)] border-b-2 border-solid content-stretch flex h-full items-center pb-[21.75px] pt-[18.25px] px-[4px] relative shrink-0 font-bold text-[#4b5563] text-[15px]">통계</a>
                  <a href="/settings" className="border-[rgba(0,0,0,0)] border-b-2 border-solid content-stretch flex h-full items-center pb-[21.75px] pt-[18.25px] px-[4px] relative shrink-0 font-bold text-[#4b5563] text-[15px]">세팅</a>
                </nav>
              </div>
              <div className="content-stretch flex gap-[32px] h-full items-center relative shrink-0">
                <div className="content-stretch flex gap-[32px] h-full items-center relative shrink-0">
                  <a href="#" className="font-bold text-[#4b5563] text-[15px]">MH Vector AI</a>
                  <a href="#" className="font-bold text-[#4b5563] text-[15px]">MH Ontology AI</a>
                </div>
                <div className="bg-[#e2e8f0] h-[24px] shrink-0 w-px" />
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="content-stretch flex flex-col items-end relative shrink-0">
                    <span className="font-bold text-[#1e293b] text-[14px]">Alex Chen</span>
                    <span className="font-bold text-[#137fec] text-[11px]">관리자</span>
                  </div>
                  <div className="border border-[#e2e8f0] border-solid relative rounded-full shrink-0 size-[36px] overflow-hidden">
                    <img alt="Alex Chen" className="w-full h-full object-cover" src={imgAlexChen} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main */}
        <div className="content-stretch flex flex-col items-start pb-[85px] pt-[40px] px-[192px] relative shrink-0 w-full z-[1]">
          <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[896px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <h1 className="font-bold text-[#0f172a] text-[24px] leading-[32px]">파일 업로드 및 정보 입력</h1>
              <p className="font-normal text-[#64748b] text-[14px] leading-[20px]">선택된 파일을 확인하고 상세 정보를 입력해 주세요.</p>
            </div>
            {/* File Preview Area */}
            <div className="bg-[rgba(238,246,255,0.5)] border-2 border-[rgba(19,127,236,0.4)] border-solid content-stretch flex flex-col h-[358px] items-center justify-center p-[34px] relative rounded-[12px] shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center justify-end py-[16px] relative w-full">
                <div className="bg-white border border-[rgba(19,127,236,0.1)] border-solid content-stretch flex items-center justify-center p-px relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[80px] mb-[16px]">
                  <span className="material-symbols-outlined text-[#137fec] text-[48px]">description</span>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                  <span className="font-bold text-[#0f172a] text-[18px] leading-[28px]">2024_Manual_Draft.pdf</span>
                  <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                    <span className="font-medium text-[#64748b] text-[14px]">4.5 MB</span>
                    <div className="bg-[#cbd5e1] rounded-full shrink-0 size-[4px]" />
                    <span className="font-bold text-[#137fec] text-[12px] tracking-[0.6px] uppercase">선택 완료</span>
                  </div>
                </div>
              </div>
              <button className="absolute right-[16px] top-[16px] rounded-full size-[32px] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#94a3b8] text-[24px]">close</span>
              </button>
            </div>
            {/* File Info Form */}
            <div className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
              <div className="bg-[rgba(248,250,252,0.5)] border-[#f1f5f9] border-b border-solid relative shrink-0 w-full">
                <div className="content-stretch flex gap-[8px] items-center pb-[17px] pt-[16px] px-[24px] relative w-full">
                  <span className="material-symbols-outlined text-[#137fec] text-[20px]">edit_note</span>
                  <span className="font-bold text-[#1e293b] text-[14px]">파일 상세 정보</span>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative shrink-0 w-full">
                <div className="relative shrink-0 w-full h-[336px]">
                  {/* 파일명 & 사이즈 - top row */}
                  <div className="absolute content-stretch flex gap-[24px] items-start left-0 right-0 top-0">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                      <label className="font-bold text-[#334155] text-[14px] leading-[20px]">파일명</label>
                      <input className="bg-white border border-[#e2e8f0] border-solid content-stretch flex h-[42px] items-center overflow-clip px-[17px] py-[11px] relative rounded-[8px] shrink-0 w-full font-normal text-[#0f172a] text-[14px]" defaultValue="2024_Manual_Draft.pdf" />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                      <label className="font-bold text-[#334155] text-[14px] leading-[20px]">파일 사이즈</label>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                        <input readOnly className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid content-stretch flex-1 h-[42px] items-center overflow-clip px-[17px] py-[11px] relative rounded-[8px] font-normal text-[#64748b] text-[14px]" value="4.5" />
                        <span className="font-bold text-[#64748b] text-[14px]">MB</span>
                      </div>
                    </div>
                  </div>
                  {/* 파일 버전 */}
                  <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 right-0 top-[94px]">
                    <label className="font-bold text-[#334155] text-[14px] leading-[20px]">파일 버전</label>
                    <input className="bg-white border border-[#e2e8f0] border-solid content-stretch flex h-[42px] items-center overflow-clip px-[17px] py-[11px] relative rounded-[8px] shrink-0 w-full font-normal text-[#94a3b8] text-[14px]" placeholder="V1.0" />
                  </div>
                  {/* 파일 설명 */}
                  <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 right-0 top-[188px]">
                    <label className="font-bold text-[#334155] text-[14px] leading-[20px]">파일 설명</label>
                    <textarea className="bg-white border border-[#e2e8f0] border-solid content-stretch flex items-start min-h-[120px] overflow-clip pb-[89px] pt-[11px] px-[17px] relative rounded-[8px] shrink-0 w-full font-normal text-[#94a3b8] text-[14px] resize-none" defaultValue="Dell 사용자 매뉴얼 V1.o 입니다." />
                  </div>
                </div>
                {/* Footer */}
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pt-[33px] relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <span className="material-symbols-outlined text-[#94a3b8] text-[14px]">info</span>
                    <span className="font-normal text-[#94a3b8] text-[12px]">{`내용을 확인하신 후 '업로드 시작' 버튼을 클릭하세요.`}</span>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <button className="content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] relative rounded-[8px] shrink-0">
                      <span className="font-bold text-[#64748b] text-[14px]">취소</span>
                    </button>
                    <button className="bg-[#137fec] content-stretch flex gap-[8px] items-center px-[32px] py-[10px] relative rounded-[8px] shrink-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                      <span className="material-symbols-outlined text-white text-[18px]">cloud_upload</span>
                      <span className="font-bold text-white text-[14px]">업로드 시작</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
