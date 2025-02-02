# 즐거운 과제

1. codingon 사이트 react with typescript 과제 하기
   - **코드** 제출하기
2. todo project 디벨롭 시키기!
   - todo project typescript로 마이그레이션
   - todo 삭제와 수정에 대한 API 만들기
     <br />(삭제는 필수, 수정은 선택)
   - API 에 따른 Reducer 와 프론트 변경
   - github에 올리고 **github 레포** 제출하기
     <br />
     <br />

## _typescript 로 마이그레이션 하는 방법?_

- 패키지 설치: `npm install typescript @types/node @types/react @types/react-dom`
- js & jsx 파일 → ts, tsx 파일로 변경
- tsconifg.json 생성
- src/index.tsx 아래 코드처럼 변경
  ```tsx
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  ```
  `document.getElementById("root")`가 null일 경우를 대비해서 as HTMLElement 처리
- 컴포넌트나 일반 ts파일에서 사용하는 type 설정
