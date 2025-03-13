import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
`;

const UserProfile = styled.div`
  display: flex;
  align-items: right;
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
      <UserProfile>
        <span>Hi, User</span>
        <ProfileImage src="../src/data/img/profile.png" alt="Profile" />
      </UserProfile>
    </HeaderContainer>
  );
}

export default Header;
