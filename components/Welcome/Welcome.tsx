import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';
import Image from 'next/image';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image src="../../logo.svg" alt="logo" width={200} height={200} />
      </div>
      <Title className={classes.title} align="center" mt={2}>
        <Text
          variant="gradient"
          component="span"
          sx={{ fontFamily: 'SFPro', fontSize: 117, fontWeight: 900 }}
        >
          HELIX2
        </Text>
      </Title>
      <Text
        color="dimmed"
        align="center"
        size="lg"
        sx={{ fontFamily: 'Spotnik', maxWidth: 580, fontWeight: 900 }}
        mx="auto"
        mt="xl"
      >
        next-gen name and link service
      </Text>
    </>
  );
}
