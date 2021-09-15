import { Table, Tag  } from 'antd';
import { data } from '../assets/data/cssData';

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (name) => (
      <a
        href={`https://developer.mozilla.org/en-US/docs/Web/CSS/${name}`}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
    ),
    filteredValue: null,
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name >= b.name,
  },
  {
    title: "Keywords",
    dataIndex: "keywords",
    key: "keywords",
    render: (keywords) => {
      return Array.isArray(keywords)
        ? keywords.map((tag) => (
            <Tag color={"default"} key={tag}>
              {tag}
            </Tag>
          ))
        : "";
    },
  },
  {
    title: "Default Value",
    dataIndex: "default_value",
    key: "default_value",
    width: 100,
  },
  {
    title: "Typedom Types",
    dataIndex: "typedom_types",
    key: "typedom_types",
    render: (typedom_types) => {
      return Array.isArray(typedom_types)
        ? typedom_types.map((tag) => (
            <Tag color={"default"} key={tag}>
              {tag}
            </Tag>
          ))
        : "";
    },
  },
];

const CssTable = ({...props}) => (
  <div className="App">
    <Table dataSource={data} columns={columns} pagination={false} bordered size={'small'}/>
  </div>
);

export default CssTable;