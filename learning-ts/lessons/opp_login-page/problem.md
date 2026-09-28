# Login Page Test

## Internal login page

- username: #username
- password: #password
- login button: #loginBtn

## external login page

- username: #ext-username
- password: #ext-password
- login button: #ext-loginBtn

# write pseduo code to test the internal/external logion pages

- abstract LoginPage{
  protected abstract inputUsername(username: string): void
  protected abstract inputPassword(password: string): void
  protected abstract clickLoginBtn(): void
  }

- Controller/LoginPageFlow{
  login(loginPage: LoginPage, username: string, password: string) : void {
  loginPage.inputUsername(username)
  loginPage.inputPassword(password)
  loginPage.clickLoginBtn()
  }
  }

- Test{
  let internalLoginPage: LoginPage
  let externalLoginPage: LoginPage

  let dataIntLoginPage = {
  username: "username",
  password: "password"
  }

  let dataExtLoginPage = {
  username: "username",
  password: "password"
  }

  loginFlow = new LoginFlow()
  loginFlow.login(internalLoginPage, ...,....)
  loginFlow.login(externalLoginPage, ...,....)
}
