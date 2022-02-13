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
    name: string,
    players: number,
    organizer: string
) {
    return { name, players, organizer };
}

const rows = [
    createData('トーナメント１', 159, "player1"),
    createData('トーナメント２', 237, "player2"),
    createData('トーナメント３', 262, "player3"),
    createData('トーナメント４', 305, "player4"),
    createData('トーナメント５', 356, "player5"),
];

const CustomizedTable: React.FC = () => {
    return (
        <>
            <TournamentBar />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell css={tableHeaderStyle}>大会名</StyledTableCell>
                            <StyledTableCell align="right" css={tableHeaderStyle}>参加者数</StyledTableCell>
                            <StyledTableCell align="right" css={tableHeaderStyle}>主催者</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.players}</StyledTableCell>
                                <StyledTableCell align="right">{row.organizer}</StyledTableCell>
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

export default CustomizedTable;