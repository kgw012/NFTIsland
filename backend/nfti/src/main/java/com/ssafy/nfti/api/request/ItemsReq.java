package com.ssafy.nfti.api.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ItemsReq {
    String image;
    String authorName;
    String itemTitle;
    String itemDescription;
}
