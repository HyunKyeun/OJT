export default function Custombtn({ type, post }) {
  return (
    <>
      <button type={type} className="custombtn">
        {post}
      </button>
      <style jsx>
        {`
          .custombtn {
            height: 40px;
            margin-right: 8px;
            padding: 0 16px;
            border: 0;
            border-radius: 20px;
            background-color: rgba(169, 210, 200, 0.7);
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.6);
            cursor: pointer;
          }
          .custombtn:hover {
            background-color: rgba(169, 210, 200, 0.9);
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.6);
          }
        `}
      </style>
    </>
  );
}
