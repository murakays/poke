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

function createData(
    date: string,
    name: string,
    organizer: string,
    players: number,
    winner: string
) {
    return { date, name, organizer, players, winner };
}

const rows = [
    createData('2022年2月13日','トーナメント1', 'player1', 159, "winner1"),
    createData('2022年2月13日','トーナメント2', 'player1', 159, "winner1"),
    createData('2022年2月13日','トーナメント3', 'player1', 159, "winner1"),
    createData('2022年2月13日','トーナメント4', 'player1', 159, "winner1"),
    createData('2022年2月13日','トーナメント5', 'player1', 159, "winner1"),
];

const CompletedTable: React.FC = () => {
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
                            <StyledTableCell align="right" css={tableHeaderStyle}>勝者</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell align="right">{row.date}</StyledTableCell>
                                <StyledTableCell align="right">{row.name}</StyledTableCell>
                                <StyledTableCell align="right">{row.organizer}</StyledTableCell>
                                <StyledTableCell align="right">{row.players}</StyledTableCell>
                                <StyledTableCell align="right">{row.winner}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

const tableHeaderStyle = css`
    font-weight: bold;
`;

export default CompletedTable;