const { useState } = React;
import Flight from '../config/conf.js'
const Cell = (props) => {
  const { index } = props;
  const [active, handleActive] = useState(false);

  return React.createElement(
    "div",
    {
      id: "cardContainer",
      style: {
        height: active ? `300px` : `100px`,
        transition: "0.9s",
      },

      onClick: () => {
        handleActive(!active);
      },
    },

    React.createElement(
      "div",
      { id: "firstDisplay" },
      React.createElement(
        "div",
        { id: "flightDetail" },
        React.createElement(
          "div",
          {
            id: "detailLabel",
            style: { fontWeight: "bold", color: Flight[index].label },
          },
          "From"
        ),
        "BLR",
        React.createElement(
          "div",
          { id: "detailLabel" },
          "Kempegowda International"
        )
      ),

      React.createElement(
        "div",
        {
          id: "flightDetail",
          style: {
            marginTop: "15px",
          },
        } ,

        React.createElement(
          "div",
          { id: "animContainer" } ,
          React.createElement(
            "div",
            { id: "anim" } ,
            React.createElement("div", { id: "circle" }) ,
            React.createElement("div", { id: "circle" }) ,
            React.createElement("div", { id: "circle" })
          )
        ) ,

        React.createElement(
          "div",
          { id: "animContainer", style: { left: "62px" } } ,
          React.createElement(
            "div",
            { id: "anim" } ,
            React.createElement("div", { id: "circle" }) ,
            React.createElement("div", { id: "circle" }) ,
            React.createElement("div", { id: "circle" })
          )
        ) ,

        React.createElement("img", {
          style: { width: "30px" },
          src:
            "https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true",
        })
      ) ,

      React.createElement(
        "div",
        { id: "flightDetail" } ,
        React.createElement(
          "div",
          {
            id: "detailLabel",
            style: { fontWeight: "bold", color: Flight[index].label },
          },
          "To"
        ),
        "DEL" ,

        React.createElement(
          "div",
          { id: "detailLabel" },
          "Indira Gandhi International"
        )
      )
    ) ,

    React.createElement(
      "div",
      {
        id: "first",
        style: {
          transform: active
            ? `rotate3d(1, 0, 0, -180deg)`
            : `rotate3d(1, 0, 0, 0deg)`,
          transitionDelay: active ? "0s" : "0.3s",
        },
      } ,

      React.createElement(
        "div",
        { id: "firstTop" } ,
        React.createElement("img", {
          style: Flight[index].style,
          src: Flight[index].src,
        }) ,
        React.createElement(
          "div",
          { id: "timecontainer" } ,
          React.createElement(
            "div",
            { id: "detailDate" },
            "Bengaluru" ,

            React.createElement("div", { id: "detailTime" }, "6:20"),
            "June 12"
          ) ,

          React.createElement("img", {
            style: {
              width: "30px",
              height: "26px",
              marginTop: "22px",
              marginLeft: "16px",
              marginRight: "16px",
            },

            src:
              "https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true",
          }) ,

          React.createElement(
            "div",
            { id: "detailDate" },
            "New Delhi" ,

            React.createElement("div", { id: "detailTime" }, "8:45"),
            "June 12"
          )
        )
      ) ,

      React.createElement(
        "div",
        { id: "firstBehind" } ,
        React.createElement(
          "div",
          { id: "firstBehindDisplay" } ,
          React.createElement(
            "div",
            { id: "firstBehindRow" } ,
            React.createElement(
              "div",
              { id: "detail" },
              "6:20 - 8:45" ,

              React.createElement("div", { id: "detailLabel" }, "Flight Time")
            ) ,

            React.createElement(
              "div",
              { id: "detail" },
              "No" ,

              React.createElement("div", { id: "detailLabel" }, "Transfer")
            )
          ) ,

          React.createElement(
            "div",
            { id: "firstBehindRow" } ,
            React.createElement(
              "div",
              { id: "detail" },
              "2h 25 min" ,

              React.createElement("div", { id: "detailLabel" }, "Duration")
            ) ,

            React.createElement(
              "div",
              { id: "detail" },
              "8" ,
              React.createElement("div", { id: "detailLabel" }, "Gate")
            )
          ) ,

          React.createElement(
            "div",
            { id: "firstBehindRow" } ,
            React.createElement(
              "div",
              { id: "detail" },
              "5:35" ,

              React.createElement("div", { id: "detailLabel" }, "Boarding")
            ) ,

            React.createElement(
              "div",
              { id: "detail" },
              "20A" ,

              React.createElement("div", { id: "detailLabel" }, "Seat")
            )
          )
        ) ,

        React.createElement(
          "div",
          {
            id: "second",
            style: {
              transform: active
                ? `rotate3d(1, 0, 0, -180deg)`
                : `rotate3d(1, 0, 0, 0deg)`,
              transitionDelay: active ? "0.2s" : "0.2s",
            },
          } ,

          React.createElement("div", { id: "secondTop" }) ,
          React.createElement(
            "div",
            { id: "secondBehind" } ,
            React.createElement(
              "div",
              { id: "secondBehindDisplay" } ,
              React.createElement(
                "div",
                { id: "price" },
                "$100" ,

                React.createElement("div", { id: "priceLabel" }, "Price")
              ) ,

              React.createElement(
                "div",
                { id: "price" },
                "Economy" ,

                React.createElement("div", { id: "priceLabel" }, "Class")
              ) ,

              React.createElement("img", {
                id: "barCode",
                src:
                  "https://github.com/pizza3/asset/blob/master/barcode.png?raw=true",
              })
            ) ,

            React.createElement(
              "div",
              {
                id: "third",
                style: {
                  transform: active
                    ? `rotate3d(1, 0, 0, -180deg)`
                    : `rotate3d(1, 0, 0, 0deg)`,
                  transitionDelay: active ? "0.4s" : "0s",
                },
              } ,

              React.createElement("div", { id: "thirdTop" }) ,
              React.createElement(
                "div",
                { id: "secondBehindBottom" } ,
                React.createElement(
                  "button",
                  {
                    id: "button",
                    style: {
                      color: Flight[index].label,
                      border: `1px solid ${Flight[index].label}`,
                    },
                  },
                  "Pay"
                )
              )
            )
          )
        )
      )
    )
  );
};

export default Cell
