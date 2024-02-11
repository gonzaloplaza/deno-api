type AuthenticationRequest = {
  username: string;
  password: string;
};

type AuthenticationResponse = {
  username: string;
  token: string;
};

export const authenticate = (
  request: AuthenticationRequest,
): Promise<AuthenticationResponse> =>
  Promise.resolve({
    username: request.username,
    token: "",
  });
