import React from "react";

export const MyModalComponent = () => {
    console.log("MyModalComponent");
  return (
    <div>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Contactenos</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body"><ipsum className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo nemo laboriosam autem mollitia. Tenetur tempore, similique alias, reiciendis odio debitis nihil id labore excepturi rem aliquam voluptatum molestias veniam!</ipsum></div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
