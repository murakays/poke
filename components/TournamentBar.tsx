import * as React from 'react';
import { css } from "@emotion/react"
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {useRouter} from "next/router";

const TournamentBar: React.FC = () => {
    const router = useRouter();

    return (
        <div css={divWrapper}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        <Button
                            key={"upcoming"}
                            onClick={e => {
                                e.preventDefault();
                                router.push('/upcoming')
                            }}
                            disabled={router.pathname == '/upcoming'}
                            sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold'}}
                        >
                            開催予定の大会
                        </Button>
                        <Button
                            key={"completed"}
                            onClick={e => {
                                e.preventDefault();
                                router.push('/completed')
                            }}
                            disabled={router.pathname == '/completed'}
                            sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold'}}
                        >
                            終了した大会
                        </Button>
                        <Button
                            key={"ongoing"}
                            onClick={e => {
                                e.preventDefault();
                                router.push('/ongoing')
                            }}
                            disabled={router.pathname == '/ongoing'}
                            sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold'}}
                        >
                            現在開催中の大会
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </div>
    );
}

const divWrapper = css`
  background: #f2f2f7;
`

export default TournamentBar;