import {
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Colors from "../components/Colors";
import Actions from "../components/Actions";
import Footer from "../components/Footer";
import Summary from "../components/Summary";
import BackgroundUpload from "../components/BackgroundUpload";
import { useCallback, useMemo, useState } from "react";
import { Screen1, Screen2, Screen3 } from "../visuals/Screens";
import ScreenControls, { ScreenNumber } from "../components/ScreenControls";
import { cropImg } from "../utils/Crop";

const screenMap = {
  1: Screen1,
  2: Screen2,
  3: Screen3,
};

function App() {
  const [background, setBackground] = useState<string | null>();
  const [screen, setScreen] = useState<ScreenNumber>(1);
  const Screen = useMemo(() => screenMap[screen], [screen]);

  const downloadBackground = useCallback(() => {
    if (background) {
      cropImg(background).then((blob?: Blob) => {
        if (blob) {
          saveAs(blob, "background.png");
        }
      });
    }
  }, [background]);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        padding={2}
        sx={{
          display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // alignContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2">EdgeTX Theme Creator</Typography>
        <Typography gutterBottom variant="body2" color="textSecondary">
          This is an experimental tool that has only been tested with{" "}
          <b>Edge TX 2.5</b> and on <b>Radiomaster TX16S</b>. The resulting
          theme might display differently using different radios and might not
          work with upcoming EdgeTX releases.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card elevation={4}>
            <CardContent>
              <Stack spacing={2} width="100%">
                <Colors />
                <Summary />
                <Actions
                  saveBackground={downloadBackground}
                  hasBackground={!!background}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "100%", position: "relative" }}>
            <BackgroundUpload onFile={setBackground} />
            <Screen background={background} />
          </Box>
          <ScreenControls
            screen={screen}
            setScreen={setScreen}
            saveBackground={downloadBackground}
            hasBackground={!!background}
          />
          <Typography gutterBottom variant="body2" color="textSecondary">
            If you notice any bugs or have features that you'd like to see, you
            can{" "}
            <Link
              target="_blank"
              href="https://github.com/edriskus/edgetx-theme-creator/issues"
            >
              open an <b>Issue</b> on GitHub
            </Link>{" "}
            and I'll make sure to address it.
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}

export default App;
