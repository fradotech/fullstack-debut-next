import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { CellProps, Column } from 'react-table';
import { UserResponse } from '../../@server/modules/users/user/responses/user.response';
import ActionButtons from '../../client/Components/molecules/ActionButtons/ActionButtons.molecule';
import DataTable from '../../client/Components/organs/DataTable/DataTabel';
import { useDidUpdateEffect } from '../../client/hooks/useDidUpdateEffect';
import Main from '../../client/Layouts/Main';
import { routes } from '../../client/Routes';
import { userService } from '../../client/service/user/user.service';

const UserPage: NextPage<any> = () => {
  const router = useRouter()
  const [data, setData] = React.useState<UserResponse[]>([])

  React.useEffect(() => {
    const fetch = async () => {
      const data = await userService.fetch()
      setData(data.data)
    }
    fetch()
  }, [])

  const queryParams = new URLSearchParams('null');

  const [filters, setFilters] = useState({
    search: queryParams.get('search'),
    sort: queryParams.get('sort'),
    order: queryParams.get('order') || 'ASC',
    page: queryParams.get('page') || '1',
  });

  useDidUpdateEffect(() => {
    router.push({
      pathname: window.location.pathname,
      query: filters
    });
  }, [filters]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setFilters({ ...filters, search: e.target.value, page: '1' });
  };

  const handleClearSearch = () => {
    return setFilters({ ...filters, search: '' });
  };

  const handleDelete = (id: string) => {
    id
  };

  const columns = useMemo<Column<UserResponse>[]>(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Role',
        accessor: 'role',
      },
      {
        Header: 'Actions',
        Cell: ({ cell }: CellProps<UserResponse>) => {
          const id = cell.row.original.id;
          return (
            <ActionButtons
              detailLink={`${routes.users.slice}/${id}`}
              updateLink={`${routes.users.slice}/${id}`}
              onDelete={() => handleDelete(id)}
            />
          );
        },
      },
    ],
    [],
  );

  return (
    <Main>
      <div className="page__center">
        <DataTable
          columns={columns as ReadonlyArray<Column<object>>}
          data={data as object[]}
        />
      </div>
    </Main>
  );
};

export default UserPage;
