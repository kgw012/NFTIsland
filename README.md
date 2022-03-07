# 블록체인 프로젝트

### 아이디어

## NFT를 이용한 IT 커뮤니티

------

### 기획 배경

- 사이버콩즈, BAYC(The Bored Ape Yacht), 크립토펑크 등 NFT를 기반으로한 커뮤니티 프로젝트들이 많이 생겨 나고있다.
- 이런 프로젝트를 일반 단체에서 진행하기에는 많은 리소스와 시간이 필요하여 어렵기 때문에 쉽게 커뮤니티를 생성할 수 있는 플랫폼을 생각해 보았습니다.

### 기획서

- 기업, 단체 등의 NFT를 소유하면 해당 기업의 뱃지를 발급받는다.
  - NFT(PFP)를 소유하면 해당 커뮤니티에 참여할 수 있다.
- 커뮤니티(단체)는 여러가지가 될 수 있다.
  - 기업(네이버, 카카오 등), 단체(싸피 등), 오픈소스(React, Spring 등), IT관련 소식 등...
- 커뮤니티(단체)관리자의 입장에서
  - 자신의 커뮤니티만의 NFT를 발행하고 IT 커뮤니티 회원들에게 나눠주면서 소속 커뮤니티 회원들간의 강한 유대감을 형성할 수 있다.
  - 커뮤니티 회원의 식별이 편리해지고 관리가 쉬워진다.
  - 커뮤니티에서 진행되는 행사나 공지를 쉽게 알릴 수 있다.
  - 회원들은 자신의 커뮤니티가 활성화되면 NFT의 가치가 상승하기 때문에 커뮤니티에 더 많은 기여를 하게된다.
  - 커뮤니티의 성향에 맞게 NFT 거래를 허용 할 수도 있다.
  - 추가 NFT발행을 통해 회원을 늘릴 수 있다.
  - 문제를 일으키는 회원에 대해 관리자가 블록체인 지갑을 차단할 수 있다
- 일반 유저의 입장에서
  - 여러 커뮤니티중에서 자신이 원하는 커뮤니티에 가입할 수 있다. (NFT를 얻어서)
  - 내가 가지고 있는 NFT를 모아보면서 나를 나타낼 수 있다.
  - 커뮤니티에 관련된 게시글을 작성하면서 커뮤니티 가치를 키워간다.
  - 거래가 가능한 NFT는 사용자끼리 사고팔 수 있다.

**커뮤니티 뱃지를 NFT로 만들기**

- 커뮤니티에서 사용할 수 있는 뱃지를 NFT형식으로 제공한다.
- 단순 뱃지의 역할만 하는 것이 아니라 NFT로 고유의 PFP를 만들어 커뮤니티 신분증으로 지니도록 한다.
- 뱃지 NFT를 소유한 사용자만을 위한 커뮤니티가 생성되며, 같은 관심사를 가진 사용자끼리 소통을 할 공간이 마련된다.
- 해당 NFT를 판매하면 판매자는 더이상 커뮤니티의 소속이 되지않으며, 구매자가 새롭게 커뮤니티에 소속된다. (오픈 커뮤니티 한정)

**서비스**

1. NFT 뱃지 발행을 위한 PFP 기능
   - NFT별 고유 형태는 랜덤한 일러 + 뱃지번호 등으로 구별
2. NFT 거래를 위한 마켓플레이스
   - 최초 뱃지 구매 및 구매한 뱃지 판매, 구매
3. NFT를 소유한 사용자가 소속된 커뮤니티
   - 같은 커뮤니티의 NFT를 가진 사용자끼리 소통할 수 있는 공간 제공

### 역할분담

### 개발은 다같이!!

### JIRA 관리자 & 기획 관리 & PM

- 윤은채
- 박준용

### 프론트 테크리더

- 육현동

프론트(육현동, 윤은채, 윤효전)

### 백엔드 테크리더

- 나요셉

백엔드(김길웅, 나요셉, 박준용)

### 스마트 컨트랙트 테크리더

- 김길웅
- 윤효전

스마트컨트랙트(다같이)

### 팀장

- 박준용

## 요구사항 명세서

https://dev-junyong.notion.site/aa5fcf4d71fe4a88920725a2e9e7077f

그 외의 자료는 Notion에 정리했습니다!

탈중앙형 NFT 거래 플랫폼 **스켈레톤 코드**입니다.

- backend (Node.js)
- frontend (React.js)
- contracts (Truffle/Solidity)