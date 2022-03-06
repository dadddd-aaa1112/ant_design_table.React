import React from 'react'
import { pokemons } from './data'
import { Table, Typography, Image } from 'antd'

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
	},
	{
		title: 'Class',
		dataIndex: 'classification',
		key: 'classification',
		filters: [
			{
				text: 'Worm',
				value: 'Worm',
			},
			{
				text: 'Seed',
				value: 'Seed',
			},
			{
				text: 'Tiny Turtle',
				value: 'Tiny Turtle',
			},
		],
		onFilter: (value, record) => record.classification.indexOf(value) === 0,
	},
	{
		title: 'Num',
		dataIndex: 'number',
		key: 'number',
		sorter: (a, b) => a.number - b.number,
	},
	{
		title: 'Rate',
		dataIndex: 'fleeRate',
		key: 'fleeRate',
	},
	{
		title: 'img',
		dataIndex: 'image',
		key: 'image',
		render: (image) => <Image width={100} src={image}></Image>,
	},
]

const dataSource = pokemons.map((item) => ({ ...item, key: item.id }))
const _Table = () => {
	return (
		<div>
			<Table
				dataSource={dataSource}
				columns={columns}
				pagination={{
					defaultPageSize: 3,
					showSizeChanger: true,
					pageSizeOptions: [5, 10, 15, 50],
				}}
			/>
		</div>
	)
}

export default _Table
