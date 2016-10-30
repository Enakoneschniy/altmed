@if ($breadcrumbs)
    <ul class="breadcrumbs" itemscope="" itemtype="http://schema.org/BreadcrumbList">
        @foreach ($breadcrumbs as $breadcrumb)
            <li class="breadcrumbs_i" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                @if (!$breadcrumb->last)
                    <a href="{{$breadcrumb->url}}" class="breadcrumbs_link" itemprop="item">
                        <span class="breadcrumbs_title" itemprop="name">{{$breadcrumb->title}}</span>
                    </a>
                @else
                    <a href="{{$breadcrumb->url}}" class="breadcrumbs_link" itemprop="item">
                        <span class="breadcrumbs_title" itemprop="name">{{$breadcrumb->title}}</span>
                    </a>
                @endif
            </li>
        @endforeach
    </ul>
@endif