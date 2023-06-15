// CalendarManagerBridge.m
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import "MyApp-Bridging-Header.h"

@interface RCT_EXTERN_MODULE(CalendarManager, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)

@end
