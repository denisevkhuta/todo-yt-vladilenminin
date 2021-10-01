import React from 'react';

const Form = () => {
    return (
        <div className="container">
            <form>
                <div class="mb-3">
                    <label for="" class="form-label"></label>
                    <input type="text" name="" id="" class="form-control" placeholder="Введите название заметки" aria-describedby="helpId" />
                    <small id="helpId" class="text-muted"></small>
                </div>
            </form>
        </div>
    );
}

export default Form;