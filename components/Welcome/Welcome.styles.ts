import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    fontFamily: 'SFPro',
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: 5,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
      fontFamily: 'Tenika',
    },
  },
}));
