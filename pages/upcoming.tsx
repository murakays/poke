import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TournamentBar from "../components/TournamentBar";
import {css} from "@emotion/react";
import axios from "axios";
import useSWR, {SWRConfig} from 'swr';
import upcomingDatas from "../lib/upcomingDatas";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export async function getStaticProps () {
    const result = await upcomingDatas()
    return {
        props: {
            fallback: {
                '/api/getUpComingTournament': {
                    results: result
                }
            }
        }
    }
}

const UpcomingTable: React.FC = () => {
    // TODO ページング取得と再取得関連の調査を行う
    const fetcher = (url:string) => axios(url).then((res) => res.data);
    const {data} = useSWR('/api/getUpComingTournament', fetcher);
    console.log(data);

    return (
        <>
            <TournamentBar />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right" css={tableHeaderStyle}>日時</StyledTableCell>
                            <StyledTableCell align="right" css={tableHeaderStyle}>大会名</StyledTableCell>
                            <StyledTableCell align="right" css={tableHeaderStyle}>主催者</StyledTableCell>
                            <StyledTableCell align="right" css={tableHeaderStyle}>参加者数</StyledTableCell>
                            <StyledTableCell align="right" css={tableHeaderStyle}>登録</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.results.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell align="right">{row.date}</StyledTableCell>
                                <StyledTableCell align="right">{row.name}</StyledTableCell>
                                <StyledTableCell align="right">{row.organizer}</StyledTableCell>
                                <StyledTableCell align="right">{row.players}</StyledTableCell>
                                <StyledTableCell align="right">REGISTER</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

const Page = ({ fallback }) => {
    return (
        <SWRConfig value={{fallback}}>
            <UpcomingTable />
        </SWRConfig>
    )
}

const tableHeaderStyle = css`
    font-weight: bold;
`;

export default Page;