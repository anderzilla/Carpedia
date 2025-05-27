import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
`;

export const VehicleImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Section = styled.View`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.accent};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const InfoText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  margin-bottom: 4px;
`;

export const ErrorText = styled(InfoText)`
  color: ${({ theme }) => theme.error};
  margin-bottom: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 8px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;

export const Button = styled.Pressable`
  background-color: ${({ theme }) => theme.accent};
  padding: 12px 0;
  border-radius: 8px;
  margin-top: 10px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.badgeText};
  font-weight: bold;
  font-size: 16px;
`;

export const Badge = styled.View`
  align-self: flex-start;
  background-color: ${({ theme }) => theme.badgeBackground};
  padding: 4px 8px;
  border-radius: 12px;
  margin-bottom: 8px;
`;

export const BadgeText = styled.Text`
  color: ${({ theme }) => theme.badgeText};
  font-size: 12px;
  font-weight: bold;
`;
