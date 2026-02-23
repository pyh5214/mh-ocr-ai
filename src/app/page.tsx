const imgBackgroundBorder = "https://www.figma.com/api/mcp/asset/f94b7e80-50df-4953-bfe9-658071431565";
const imgGradient = "https://www.figma.com/api/mcp/asset/641501f6-9aac-4ed1-abec-33610c6e5616";

export default function AiOcrLlmExtractionLandingPage() {
  return (
    <div className="bg-[#fcfdfe] content-stretch flex flex-col items-start relative size-full">
      <div className="content-stretch flex flex-col isolate items-start min-h-[1920px] overflow-clip relative shrink-0 w-full">
        {/* Header */}
        <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] border-[#f3f4f6] border-b border-solid content-stretch flex flex-col h-[80px] items-center justify-center pb-px px-[40px] relative shrink-0 w-full z-[5]">
          <div className="h-[80px] relative shrink-0 w-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
              <div className="content-stretch flex gap-[48px] items-center relative shrink-0">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="bg-[#137fec] content-stretch flex items-center justify-center relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px]">
                    <span className="material-symbols-outlined text-white text-[24px]">grid_view</span>
                  </div>
                  <span className="font-black text-[#111418] text-[20px] tracking-[-0.5px]">MH OCR AI</span>
                </div>
                <nav className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <a href="/file-management" className="px-[16px] py-[8px] rounded-full font-bold text-[#334155] text-[16px]">파일 관리</a>
                  <a href="/analytics" className="px-[16px] py-[8px] rounded-full font-bold text-[#334155] text-[16px]">통계</a>
                  <a href="/settings" className="px-[16px] py-[8px] rounded-full font-bold text-[#334155] text-[16px]">세팅</a>
                </nav>
              </div>
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                <nav className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <a href="#" className="px-[16px] py-[8px] rounded-full font-bold text-[#334155] text-[16px]">MH Vector AI</a>
                  <a href="#" className="px-[16px] py-[8px] rounded-full font-bold text-[#334155] text-[16px]">MH Ontology AI</a>
                </nav>
                <div className="border-[#f3f4f6] border-l border-solid content-stretch flex gap-[16px] items-center pl-[25px] relative shrink-0">
                  <div className="relative shrink-0">
                    <div className="flex flex-col items-end">
                      <span className="font-bold text-[#111418] text-[14px]">Alex Chen</span>
                      <span className="font-medium text-[#137fec] text-[11px]">관리자</span>
                    </div>
                  </div>
                  <div className="bg-size-[38px_38px] bg-top-left border border-[#e5e7eb] border-solid relative rounded-full shrink-0 size-[40px] overflow-hidden">
                    <img alt="Alex Chen" className="w-full h-full object-cover" src={imgBackgroundBorder} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="content-stretch flex flex-col items-center pb-[162px] relative shrink-0 w-full z-[4]">
          <div className="content-stretch flex flex-col items-start max-w-[1152px] px-[128px] py-[100px] relative shrink-0 w-[1152px]">
            <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[896px] relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="flex flex-col font-black h-[192px] justify-center leading-[96px] text-[#0f172a] text-[96px] text-center tracking-[-4.8px] whitespace-pre-wrap">
                  <p className="mb-0">대규모 지능형</p>
                  <p className="bg-clip-text bg-gradient-to-r from-[#137fec] to-[#60a5fa] text-transparent">데이터 추출</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-[672px]">
                <p className="font-medium text-[#475569] text-[24px] text-center leading-[32px]">
                  비정형 PDF 문서를 최신 AI 기술을 통해 즉시 활용 가능한<br />
                  정제된 데이터로 변환하여 업무의 가치를 높이세요.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="h-[845px] relative shrink-0 w-[960px] mt-[40px]">
            {/* PDF 업로드 */}
            <div className="absolute bg-white border border-[#f3f4f6] border-solid content-stretch flex flex-col items-center justify-center left-0 overflow-clip pb-[41px] pt-[49px] px-[49px] right-[496px] rounded-[24px] top-0">
              <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[80px] mb-[32px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(19, 127, 236) 0%, rgb(96, 165, 250) 100%)" }}>
                <span className="material-symbols-outlined text-white text-[36px]">cloud_upload</span>
              </div>
              <h3 className="font-black text-[#111418] text-[24px] tracking-[-0.6px] mb-[16px]">PDF 업로드</h3>
              <p className="font-medium text-[#64748b] text-[16px] text-center leading-[26px] max-w-[280px]">
                오브젝트 스토리지를 활용하여 보안이<br />강화된 클라우드 저장소에 파일을<br />안전하게 업로드합니다.
              </p>
            </div>
            {/* AI OCR 추출 */}
            <div className="absolute bg-white border border-[#f3f4f6] border-solid content-stretch flex flex-col items-center justify-center left-[496px] overflow-clip pb-[41px] pt-[49px] px-[49px] right-0 rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)] top-0">
              <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[80px] mb-[32px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(19, 127, 236) 0%, rgb(96, 165, 250) 100%)" }}>
                <span className="material-symbols-outlined text-white text-[36px]">document_scanner</span>
              </div>
              <h3 className="font-black text-[#111418] text-[24px] tracking-[-0.6px] mb-[16px]">AI OCR 추출</h3>
              <p className="font-medium text-[#64748b] text-[16px] text-center leading-[26px] max-w-[280px]">
                AI 에이전트가 복잡한 문서 내 텍스트,<br />테이블, 이미지를 정확하게 분류하여<br />정교하게 추출합니다.
              </p>
            </div>
            {/* LLM 정제 */}
            <div className="absolute bg-white border border-[#f3f4f6] border-solid content-stretch flex flex-col items-center justify-center left-0 overflow-clip pb-[41px] pt-[49px] px-[49px] right-[496px] rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)] top-[420px]">
              <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[80px] mb-[32px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(19, 127, 236) 0%, rgb(96, 165, 250) 100%)" }}>
                <span className="material-symbols-outlined text-white text-[36px]">psychology</span>
              </div>
              <h3 className="font-black text-[#111418] text-[24px] tracking-[-0.6px] mb-[16px]">LLM 정제</h3>
              <p className="font-medium text-[#64748b] text-[16px] text-center leading-[26px] max-w-[280px]">
                OCR 결과물을 거대언어모델(LLM)로<br />정규화 및 가공하여 신뢰도 높은 정제<br />데이터를 생성합니다.
              </p>
            </div>
            {/* 메타데이터 저장 */}
            <div className="absolute bg-white border border-[#f3f4f6] border-solid content-stretch flex flex-col items-center justify-center left-[496px] overflow-clip pb-[41px] pt-[49px] px-[49px] right-0 rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)] top-[420px]">
              <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[80px] mb-[32px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(19, 127, 236) 0%, rgb(96, 165, 250) 100%)" }}>
                <span className="material-symbols-outlined text-white text-[36px]">database</span>
              </div>
              <h3 className="font-black text-[#111418] text-[24px] tracking-[-0.6px] mb-[16px]">메타데이터 저장</h3>
              <p className="font-medium text-[#64748b] text-[16px] text-center leading-[26px] max-w-[280px]">
                페이지 정보 및 키워드 기반 색인을<br />생성하여 문서 검색 및 데이터 활용도를<br />극대화합니다.
              </p>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="border-[#f3f4f6] border-solid border-t content-stretch flex h-[184px] items-start pt-[51px] relative shrink-0 w-[960px]">
            <div className="relative shrink-0 w-full">
              <div className="content-stretch flex gap-[48px] items-start justify-center relative w-full">
                {[
                  { icon: "check_circle", title: "AI 에이전트 자동화", desc: "지능형 자동 데이터 처리" },
                  { icon: "bolt", title: "벡터 데이터 전환", desc: "RAG 시스템 임베딩 지원" },
                  { icon: "hub", title: "청킹 최적화", desc: "LLM 기반 문맥 보존 분할" },
                ].map((item) => (
                  <div key={item.title} className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative self-stretch">
                    <div className="bg-[rgba(19,127,236,0.1)] content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] shrink-0">
                      <span className="material-symbols-outlined text-[#137fec] text-[30px]">{item.icon}</span>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                      <span className="font-bold text-[#111418] text-[20px]">{item.title}</span>
                      <span className="font-medium text-[#64748b] text-[14px]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
