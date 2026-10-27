// 커니 AX 교육비 시뮬레이션 데이터. 매일 이 파일만 고치면 페이지에 반영된다.
//  - asOf: 모집현황 기준일 (YYYY-MM-DD)
//  - n: 신청 인원. 교육이 끝난 차수는 실제 참석 인원으로 바꾸고 done: true
//  - excl: 청구 제외 인원 (파트너&임원 과정만)
window.SIM_DATA = {
  asOf: '2026-10-21',
  budget: 318000000,
  sessions: {
    'mid-1': { n: 30, done: true },
    'mid-2': { n: 34 },
    'mid-3': { n: 36 },
    'mid-4': { n: 35 },
    'mid-5': { n: 8 },

    'adv-1': { n: 34 },
    'adv-2': { n: 35 },

    'p-1': { n: 10, excl: 6, done: true },
    'p-2': { n: 22, excl: 12 },

    'ms-1': { n: 7 },
    'ms-2': { n: 2 },
    'ms-3': { n: 5 },
    'ms-4': { n: 8 },
    'ms-5': { n: 12 },
    'ms-6': { n: 4 }
  }
};
