@extends('layouts.mobile')
@section('content')

<!-- MAIN CONTENT -->
<main class="main">
    <div class="breadcrumbs">
        <ul>
            <li><a href="#">Вакансии</a></li>
            <li><a href="#">Офтальмолог</a></li>
            <li><span>Анкета</span></li>
        </ul>
    </div>
    <div class="container vacancy-form__wrap">
        <div class="container__inner">
            <form action="#" class="filter-form">
                <div class="filters-wrap">
                    <div class="select-row">
                        <select class="md-select vacancy-form-select" name="" id="">
                            <option>Офтальмолог</option>
                            <option>Гинеколог</option>
                            <option>Иммунолог</option>
                            <option>Педиатр</option>
                        </select>
                    </div>
                </div>
            </form>
            <form action="#" class="vacancy-form">
                <div class="input-row">
                    <input type="text" id="vacancy-name" placeholder="Имя фамилия">
                    <label for="vacancy-name" class="name-label"></label>
                </div>
                <div class="input-row">
                    <input type="tel" id="vacancy-tel" placeholder="+380">
                    <label for="vacancy-tel" class="tel-label"></label>
                </div>
                <div class="input-row">
                    <input type="email" id="vacancy-mail" placeholder="Адрес электронной почты">
                    <label for="vacancy-mail" class="mail-label"></label>
                </div>
                <div class="input-row">
                    <textarea id="vacancy-message" placeholder="Текст сообщения"></textarea>
                    <label for="vacancy-message" class="message-label"></label>
                </div>
                <div class="input-row">
                    <input type="file" class="file-loader">
                </div>
                <div class="input-row">
                    <div class="captcha">
                        <img src="img/captcha.png" alt="">
                    </div>
                </div>
                <div class="input-row">
                    <input type="submit" class="waves-light" value="Отправить">
                </div>
            </form>
        </div>
    </div>


</main>
<!-- END MAIN CONTENT -->
@stop