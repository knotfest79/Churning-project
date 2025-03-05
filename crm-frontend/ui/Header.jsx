import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
`;

const SearchBar = styled.input`
  width: 30rem;
  padding: 0.8rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const ProfileImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

function Header() {
  return (
    <HeaderContainer>
      <SearchBar type="text" placeholder="Search orders..." />
      <UserProfile>
        <span>Hi, User</span>
        <ProfileImage src="../src/data/img/profile.png" alt="Profile" />
      </UserProfile>
    </HeaderContainer>
  );
}

export default Header;
