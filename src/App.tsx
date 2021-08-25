import * as React from 'react';
type State = {
  companyId?: string | number;
  email?: string;
  password?: string;
  password2?: string;
};

export const App: React.VFC = (props) => {
  const [state, setState] = React.useState<State>({});
  const handleChange = React.useCallback(
    <T extends keyof State>(name: T) =>
      (event: any) => {
        setState((prev) => ({
          ...prev,
          [name]: event.target.value,
        }));
      },
    []
  );

  const handleSubmit = React.useCallback(() => {
    console.log(state);
  }, [state]);

  const valid = React.useMemo<boolean>(() => {
    const { companyId, email, password, password2 } = state;

    if (!companyId) {
      return false;
    }

    if (!email) {
      return false;
    }

    if ((password?.length || 0) < 8) {
      return false;
    }

    if (password !== password2) {
      return false;
    }

    return true;
  }, [state]);

  return (
    <>
      <div>
        <input type='companyId' onChange={handleChange('companyId')} />
      </div>
      <div>
        <input type='email' onChange={handleChange('email')} />
      </div>
      <div>
        <input type='password' onChange={handleChange('password')} />
      </div>
      <div>
        <input type='password' onChange={handleChange('password2')} />
      </div>
      <div>
        <button type='button' disabled={!valid} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};
