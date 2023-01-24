import { React } from 'react';
import { styled } from '@mui/material/styles';

export default function TableList({ Header, Data }) {

    const TableTr = styled('div')(({ theme }) => ({
        backgroundColor: 'rgba(158, 158, 158, 0.12)',
        margin: 8,
        overflow: 'hidden',
        display: 'flex',
        boxShadow: '0px 2px 5px 0px #d1c4c6',
        borderRadius: Number(theme.shape.borderRadius) * 2.5
    }));

    const TableTrHead = styled('div')(({ theme }) => ({
        margin: 0,
        overflow: 'hidden',
        fontWeight: 700,
        display: 'flex',
        borderRadius: Number(theme.shape.borderRadius) * 2.5
    }));

    const TableTd = styled('div')(({ theme }) => ({
        padding: 20,
        overflow: 'hidden',
        flex: 1,
        textOverflow: 'ellipsis',
        borderRadius: Number(theme.shape.borderRadius) * 1.5
    }));
    return (
        <>
            <TableTrHead style={{ background: 'white' }}>
                {Header.map(
                    (map, i) => <TableTd
                        style={{ paddingBottom: 8, flex: (map.flex) && map.flex }}
                        key={i}>
                        {map.label}
                    </TableTd>)}
            </TableTrHead>
            {Data.map(
                (obj, i) => {
                    return <TableTr
                        key={i}>
                        {Header.map(
                            (map, j) => <TableTd
                                style={{ flex: (map.flex) && map.flex }}
                                key={j}>
                                {obj[map.id]}
                            </TableTd>)}
                    </TableTr>
                })}

        </>

    );
}
